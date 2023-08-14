package com.codestates.StackOverFlowClone.reply.dto;

import lombok.*;

import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReplyResponseDto {

    private long replyId;
    private long questionId;
    private long memberId;
    private String content;
    private LocalDateTime createdAt;

}
