package com.example.experiment5.config;

import java.io.IOException;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class LoggingFilter extends OncePerRequestFilter {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingFilter.class);

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String correlationId = UUID.randomUUID().toString();

        long startTime = System.currentTimeMillis();

        MDC.put("correlationId", correlationId);

        logger.info(
                "Request started | method={} | uri={}",
                request.getMethod(),
                request.getRequestURI()
        );

        try {
            filterChain.doFilter(request, response);

        } finally {

            long executionTime =
                    System.currentTimeMillis() - startTime;

            response.setHeader(
                    "X-Correlation-ID",
                    correlationId
            );

            logger.info(
                    "Request completed | status={} | executionTime={}ms",
                    response.getStatus(),
                    executionTime
            );

            MDC.remove("correlationId");
        }
    }
}