import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from '../dto/user';
import { UserClaims } from '@okta/okta-auth-js/lib/types';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private user: User | null;

	constructor(private authService: OktaAuthService) {
		this.user = null;
	}

	getCurrentUser(): Promise<User> {
		if (this.user != null) {
			return Promise.resolve(this.user);
		}

		return new Promise<User>(async (resolve) => {
			const user: UserClaims = await this.authService.getUser();
			const applicationUser: User = new User();
			applicationUser.id = user.sub;
			applicationUser.name = user.given_name;
			applicationUser.email = user.email;
			this.user = applicationUser;
			return resolve(applicationUser);
		});
	}

}
