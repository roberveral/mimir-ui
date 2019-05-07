export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './client.service';
import { ClientService } from './client.service';
export * from './oAuth20.service';
import { OAuth20Service } from './oAuth20.service';
export const APIS = [AuthenticationService, ClientService, OAuth20Service];
