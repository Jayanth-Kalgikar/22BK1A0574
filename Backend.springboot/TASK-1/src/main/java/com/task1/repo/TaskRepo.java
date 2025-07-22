package com.task1.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task1.entity.Entity1;

public interface TaskRepo extends JpaRepository<Entity1,String> {}
