import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    // Enterprise: log to console + future observability (e.g., Sentry)
    // Do not swallow — preserve stack for debugging
    console.error('[AI Accelerator Hub] Unhandled error', error);
  }
}
