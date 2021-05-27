package in.edac.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.edac.exception.RecordingNoFoundException;
import in.edac.model.Recording;
import in.edac.repository.RecordingRepository;
import in.edac.model.Recording;

@CrossOrigin(origins ="http://localhost:3000" )
@RestController
@RequestMapping("/a")
public class RecordingController {
	
	@Autowired
	private RecordingRepository recordingRepository;

	@GetMapping("/rec")
	public List<Recording> getAllRecording(){
		return  recordingRepository.findAll();
	}
	@PostMapping("/rec")
	public Recording createRecording(@RequestBody Recording recording) {
		return recordingRepository.save(recording);
	}
	
		@GetMapping("/rec/{id}")
		public ResponseEntity<Recording> getRecordingById(@PathVariable Long id) {
			Recording recording = recordingRepository.findById(id)
					.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
			return ResponseEntity.ok(recording);
		}
		
		
		
		@PutMapping("/rec/{id}")
		public ResponseEntity<Recording> updateRecording(@PathVariable Long id, @RequestBody Recording recordingDetails){
			Recording recording = recordingRepository.findById(id)
					.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
			
			recording.setTopicName(recordingDetails.getTopicName());
			recording.setDate(recordingDetails.getDate());
			recording.setPasscode(recordingDetails.getPasscode());
			recording.setLink(recordingDetails.getLink());
			
			Recording updatedRecording = recordingRepository.save(recording);
			return ResponseEntity.ok(updatedRecording);
		}
		

		@DeleteMapping("/rec/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteRecording(@PathVariable Long id){
			Recording recording = recordingRepository.findById(id)
					.orElseThrow(() -> new RecordingNoFoundException("Recording not exist with id :" + id));
			recordingRepository.delete(recording);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
	
}