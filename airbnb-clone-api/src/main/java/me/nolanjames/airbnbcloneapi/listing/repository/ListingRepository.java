package me.nolanjames.airbnbcloneapi.listing.repository;

import me.nolanjames.airbnbcloneapi.listing.Listing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingRepository extends JpaRepository<Listing, Long> {
}
