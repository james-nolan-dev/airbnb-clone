package me.nolanjames.airbnbcloneapi.listing;

import jakarta.persistence.*;
import lombok.*;
import me.nolanjames.airbnbcloneapi.shared.AbstractAuditingEntity;

@Entity
@Table(name = "listing_picture")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ListingPicture extends AbstractAuditingEntity<Long> {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "listingPictureSequenceGenerator")
    @SequenceGenerator(name = "listingPictureSequenceGenerator", sequenceName = "listing_picture_generator", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "listing_fk", referencedColumnName = "id")
    private Listing listing;

    @Lob
    @Column(name = "file", nullable = false)
    private byte[] file;

    @Column(name = "file_content_type")
    private String fileContentType;

    @Column(name = "is_cover")
    private boolean isCover;

    @Override
    public Long getId() {
        return id;
    }
}
