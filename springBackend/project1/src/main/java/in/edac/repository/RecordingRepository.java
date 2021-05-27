package in.edac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.edac.model.Recording;

@Repository
public interface RecordingRepository extends JpaRepository<Recording, Long> {

}
