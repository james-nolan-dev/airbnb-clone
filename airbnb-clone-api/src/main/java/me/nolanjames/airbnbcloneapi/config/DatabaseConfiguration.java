package me.nolanjames.airbnbcloneapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories({
        "me.nolanjames.airbnbcloneapi.user.repository",
        "me.nolanjames.airbnbcloneapi.listing.repository",
        "me.nolanjames.airbnbcloneapi.booking.repository"
})
@EnableTransactionManagement
@EnableJpaAuditing
public class DatabaseConfiguration {
}
