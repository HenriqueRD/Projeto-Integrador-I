package com.dordox.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dordox.DTO.CategoryDTO;
import com.dordox.Entities.CategoryEntity;
import com.dordox.Repositories.CategoryRepository;

@RestController
@RequestMapping(value = "/category")
@CrossOrigin("http://localhost:3000")
public class CategoryController {
	
	private CategoryRepository rep;

	public CategoryController(CategoryRepository rep) {
		super();
		this.rep = rep;
	}
	
	@GetMapping()
	public ResponseEntity<List<CategoryDTO>> findAll() {
		List<CategoryEntity> list = rep.findAll();
		return new ResponseEntity<>(list.stream().map(e -> new CategoryDTO(e)).collect(Collectors.toList()), HttpStatus.OK);
	}
}
