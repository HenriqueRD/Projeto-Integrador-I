package com.dordox.DTO;


import com.dordox.Entities.CategoryEntity;

public class CategoryDTO {
	private int id;
	private String description;
	
	public CategoryDTO(CategoryEntity obj) {
		id = obj.getId();
		description = obj.getDescription();
	}
	
	public CategoryDTO() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}