package com.dordox.Entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_pet")
public class PetEntity implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String namePet;
	private String genderPet;
	private String imagePet;
	private String descriptionPet;
	private String nameOwner;
	private String phoneOwner;
	private String emailOwner;
	private String localeOwner;
	@ManyToMany
	@JoinTable(name = "tb_pet_category", joinColumns = @JoinColumn(name = "pet_id") , inverseJoinColumns = @JoinColumn(name = "category_id"))
	private Set<CategoryEntity> categories = new HashSet<>();
	
	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PetEntity other = (PetEntity) obj;
		return Objects.equals(id, other.id);
	}

	public PetEntity() {
	}

	public String getImagePet() {
		return imagePet;
	}

	public void setImagePet(String imagePet) {
		this.imagePet = imagePet;
	}

	public Set<CategoryEntity> getCategories() {
		return categories;
	}

	public void setCategories(Set<CategoryEntity> categories) {
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