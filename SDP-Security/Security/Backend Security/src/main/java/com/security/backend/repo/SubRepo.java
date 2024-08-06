package com.security.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.backend.model.Sub;

public interface SubRepo extends JpaRepository<Sub, Long> {
   
}
