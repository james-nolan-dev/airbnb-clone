package me.nolanjames.airbnbcloneapi.listing;

import jakarta.persistence.*;
import lombok.*;
import me.nolanjames.airbnbcloneapi.shared.AbstractAuditingEntity;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "listing")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Listing extends AbstractAuditingEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "listingSequenceGenerator")
    @SequenceGenerator(name = "listingSequenceGenerator", sequenceName = "listing_generator", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "public_id")
    private UUID publicId;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "guests")
    private int guests;
    @Column(name = "bedrooms")
    private int bedrooms;
    @Column(name = "beds")
    private int beds;
    @Column(name = "bathrooms")
    private int bathrooms;

    @Column(name = "price")
    private int price;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private BookingCategory bookingCategory;

    @Column(name = "location")
    private String location;

    @Column(name = "landlord_public_id")
    private UUID landlordPublicId;

    @OneToMany(mappedBy = "listing", cascade = CascadeType.REMOVE)
    private Set<ListingPicture> pictures = new HashSet<>();

    @Override
    public Long getId() {
        return id;
    }
}
