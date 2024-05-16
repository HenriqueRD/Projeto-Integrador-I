package com.dordox.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.DTO.PetDTO;
import com.dordox.Entities.PetEntity;
import com.dordox.Repositories.PetRepository;

@RestController
@RequestMapping("/pet")
@CrossOrigin("http://localhost:3000")
public class PetController {
	
	@Autowired
	private PetRepository rep;


	@GetMapping()
	@Transactional(readOnly = true)
	@ResponseBody
	public ResponseEntity<List<PetDTO>> list() {
		List<PetEntity> list = rep.findAll();
		return new ResponseEntity<>(list.stream().map(e -> new PetDTO(e)).collect(Collectors.toList()), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	@Transactional(readOnly = true)
	@ResponseBody
	public ResponseEntity<PetDTO> findById(@PathVariable int id) {
		if(!rep.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		PetEntity obj = rep.findById(id).orElse(null);
		return new ResponseEntity<>(new PetDTO(obj), HttpStatus.OK);
	}
	
	@GetMapping("/findByCity")
	@ResponseBody
	public ResponseEntity<List<PetDTO>> findByCity(@RequestParam(name = "query") String query) {
		List<PetEntity>list = rep.findByCity(query.trim().toUpperCase());
		return new ResponseEntity<>(list.stream().map(e -> new PetDTO(e)).collect(Collectors.toList()), HttpStatus.OK);
	}
	
	@GetMapping("/findByTag")
	@ResponseBody
	public ResponseEntity<List<PetDTO>> findByTag(@RequestParam(name = "query") String query) {
		List<PetEntity>list = rep.findByCategory(query);
		return new ResponseEntity<>(list.stream().map(e -> new PetDTO(e)).collect(Collectors.toList()), HttpStatus.OK);
	}
	
	@PostMapping
	@ResponseBody
	public ResponseEntity<PetDTO> create(@RequestBody @Validated PetEntity obj) {
		PetEntity x = rep.save(obj);
		return new ResponseEntity<>(new PetDTO(x), HttpStatus.CREATED);
	}
}
