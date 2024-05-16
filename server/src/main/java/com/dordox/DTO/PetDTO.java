package com.dordox.DTO;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.dordox.Entities.PetEntity;

public class PetDTO {
	private int id;
	private String namePet;
	private String genderPet;
	private String imagePet;
	private String descriptionPet;
	private String nameOwner;
	private String phoneOwner;
	private String emailOwner;
	private String localeOwner;
	private List<CategoryDTO> categories = new ArrayList<>();
	
	public PetDTO() {
	}
	
	public PetDTO(PetEntity obj) {
		id = obj.getId();
		namePet = obj.getNamePet();
		genderPet = obj.getGenderPet();
		imagePet = obj.getImagePet();
		descriptionPet = obj.getDescriptionPet();
		nameOwner = obj.getNameOwner();
		phoneOwner = obj.getPhoneOwner();
		emailOwner = obj.getEmailOwner();
		localeOwner = obj.getLocaleOwner();
		categories = obj.getCategories().stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
	}

	public String getImagePet() {
		return imagePet;
	}

	public void setImagePet(String imagePet) {
		this.imagePet = imagePet;
	}

	public List<CategoryDTO> getCategories() {
		return categories;
	}

	public void setCategories(List<CategoryDTO> categories) {
		this.categories = categories;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNamePet() {
		return namePet;
	}
	public void setNamePet(String namePet) {
		this.namePet = namePet;
	}
	public String getGenderPet() {
		return genderPet;
	}
	public void setGenderPet(String genderPet) {
		this.genderPet = genderPet;
	}
	public String getDescriptionPet() {
		return descriptionPet;
	}
	public void setDescriptionPet(String descriptionPet) {
		this.descriptionPet = descriptionPet;
	}
	public String getNameOwner() {
		return nameOwner;
	}
	public void setNameOwner(String nameOwner) {
		this.nameOwner = nameOwner;
	}
	public String getPhoneOwner() {
		return phoneOwner;
	}
	public void setPhoneOwner(String phoneOwner) {
		this.phoneOwner = phoneOwner;
	}
	public String getEmailOwner() {
		return emailOwner;
	}
	public void setEmailOwner(String emailOwner) {
		this.emailOwner = emailOwner;
	}
	public String getLocaleOwner() {
		return localeOwner;
	}
	public void setLocaleOwner(String localeOwner) {
		this.localeOwner = localeOwner;
	}
}