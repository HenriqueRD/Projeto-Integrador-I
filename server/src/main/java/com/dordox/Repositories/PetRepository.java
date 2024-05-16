package com.dordox.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dordox.Entities.PetEntity;

public interface PetRepository extends JpaRepository<PetEntity, Integer> {
	
	@Query(value = "SELECT c FROM PetEntity c WHERE upper(trim(c.localeOwner)) LIKE %?1%")
	public List<PetEntity> findByCity(String query);

	@Query(value = "SELECT p FROM PetEntity p JOIN p.categories c WHERE c.id = ?1")
	public List<PetEntity> findByCategory(String query);
	
}
