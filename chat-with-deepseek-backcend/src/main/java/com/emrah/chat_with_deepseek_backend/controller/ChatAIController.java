package com.emrah.chat_with_deepseek_backend.controller;

import com.emrah.chat_with_deepseek_backend.service.ChatAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai")
public class ChatAIController {

    @Autowired
    private ChatAIService chatAIService;

    @GetMapping("/ask")
    public String askToDeepSeek(@RequestBody String question) {
        return chatAIService.askToDeepSeek(question);
    }
}
