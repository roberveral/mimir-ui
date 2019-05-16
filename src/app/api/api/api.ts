export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './client.service';
import { ClientService } from './client.service';
export * from './oAuth.service';
import { OAuthService } from './oAuth.service';
export const APIS = [AuthenticationService, ClientService, OAuthService];
