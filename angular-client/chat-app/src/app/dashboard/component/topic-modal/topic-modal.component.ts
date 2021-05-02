import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalConfig } from 'src/app/shared/config/modal-config';
import { Topic } from 'src/app/shared/dto/topic';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrls: ['./topic-modal.component.css']
})
export class TopicModalComponent implements OnInit {

  @Input("modalConfig")
  public modalConfig: ModalConfig;

  @Output("onTopicSelection")
  public onTopicSelection: EventEmitter<Topic>

  public topicForm: FormGroup;

  /**
   * Constructor for Topic Modal
   * Creates the modal with default configuration
   * @param formBuilder 
   * @param toaster 
   */
  constructor(private formBuilder: FormBuilder, private toaster: ToastrService) {

    this.topicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.onTopicSelection = new EventEmitter<Topic>();

    this.modalConfig = new ModalConfig()
  }

  ngOnInit(): void {
  }

  /**
   * Close event for modal
   */
  onClose(): void {
    this.reset();
    this.modalConfig.state = false;
  }

  /**
   * Confirm/OK event for modal
   */
  onConfirm(): void {
    if(this.topicForm.valid) {
      const topic: Topic = {...new Topic(), ...this.topicForm.value};
      this.onTopicSelection.emit(topic);
      this.reset();
      this.modalConfig.state = false;
    } else {
      this.toaster.error("Please provide valid topic name.");
    }

  }

  /**
   * Resets the form after use
   */
  private reset(): void {
    this.topicForm.reset({
      name:'',
    }, {emitEvent: false});

  }

}
