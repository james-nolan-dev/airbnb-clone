package me.nolanjames.airbnbcloneapi.listing;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {ListingPictureMapper.class})
public interface ListingPictureMapper {
}
