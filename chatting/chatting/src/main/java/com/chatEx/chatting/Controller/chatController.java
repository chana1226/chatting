package com.chatEx.chatting.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class chatController {

    @GetMapping("/")
    public String main() { // 채팅방 리스트
        return "chatList";
    }
    
    @GetMapping("/chatting/chatIn")
    public String chatGo() { // 채팅방 입장
        return "chatGo";
    }
    
}
