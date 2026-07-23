package com.oblivion.portfolio.controller;

import com.oblivion.portfolio.model.ContactRequest;
import com.oblivion.portfolio.model.ContactResponse;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    @PostMapping("/contact")
    public ContactResponse submitContact(@Valid @RequestBody ContactRequest request) {
        // A production setup would send an email or persist this somewhere.
        // For now it just logs server-side - wire up a mail sender or a
        // database write here when you're ready.
        log.info("New portfolio contact message from {} <{}>: {}",
                request.name(), request.email(), request.message());

        return new ContactResponse(true, "Thanks - your message has been received.");
    }
}
