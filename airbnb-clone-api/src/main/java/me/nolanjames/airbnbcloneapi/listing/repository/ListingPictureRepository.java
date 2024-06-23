package me.nolanjames.airbnbcloneapi.listing.repository;

import me.nolanjames.airbnbcloneapi.listing.ListingPicture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListingPictureRepository extends JpaRepository<ListingPicture, Long> {
}
