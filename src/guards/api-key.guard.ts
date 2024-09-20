import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// nest g guard api-key
@Injectable()
export class ApiKeyGuard implements CanActivate /*Interface*/ {
  // the Class Guard must have canActivate method
  canActivate(
    context: ExecutionContext, // parameter
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest(); // extract the req object
    
    // you must send with every request in the Header a {key=X-API-KEY value=nest-is-awesome}
    const apiKey = request.header('X-API-KEY');  
    if (apiKey !== 'nest-is-awesome') {
      return false;
    }

    return true;
  }
}
