import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  private loggingService?: LoggingService;

  constructor(){
    this.loggingService = inject(LoggingService);
  }

 // constructor(private loggingService: LoggingService) { }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}