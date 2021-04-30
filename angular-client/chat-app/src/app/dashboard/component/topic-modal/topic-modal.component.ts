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

  constructor(private formBuilder: FormBuilder, private toaster: ToastrService) {
    this.topicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.onTopicSelection = new EventEmitter<Topic>();

    this.modalConfig = new ModalConfig()
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.modalConfig.state = false;
  }

  onConfirm(): void {
    if(this.topicForm.valid) {
      this.onTopicSelection.emit(this.topicForm.value as Topic);
      this.modalConfig.state = false;
    } else {
      this.toaster.error("Please provide valid topic name.");
    }

  }

}
