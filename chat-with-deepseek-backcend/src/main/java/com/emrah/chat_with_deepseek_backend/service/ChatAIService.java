package com.emrah.chat_with_deepseek_backend.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ChatAIService {

    private final ChatClient chatClient;

    public ChatAIService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public String askToDeepSeek(String question) {
        return chatClient.prompt(question).call().content();
    }
}
