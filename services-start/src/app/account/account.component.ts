import { Component, Input, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  private loggingService?: LoggingService;
  private accountService: AccountsService;

  constructor(){
    this.loggingService = inject(LoggingService);
    this.accountService = inject(AccountsService);
  }

 // constructor(private loggingService: LoggingService) { }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
    //this.statusChanged.emit({ id: this.id, newStatus: status });
   // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
