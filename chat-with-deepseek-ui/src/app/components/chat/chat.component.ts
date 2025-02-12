import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: Array<{text: string, isUser: boolean}> = [];
  newMessage: string = '';

  constructor(
    private aiService: AiService,
  ) {
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const userMessage = this.newMessage;
      this.messages.push({
        text: userMessage,
        isUser: true
      });
      this.newMessage = '';
      this.aiService.askQuestion(userMessage).subscribe({
        next: (response) => {
          this.messages.push({
            text: response,
            isUser: false
          });
        },
      });
    }
  }
}
