package com.dordox.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dordox.Entities.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {

}
