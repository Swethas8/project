package com.example.demo.repositories;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Fruits;

@Repository
public interface FruitRepo extends JpaRepository<Fruits, Integer>
{
//	public List<Fruits> findByName(String name);
//	public List<Fruits> findById(int id);
//	public List<Fruits> findByIdAndName(int id,String name);
//	public List<Fruits> findByIdOrColor(int id,String color);
//	public List<Fruits> findByNameAndPrice(String name,int price);
//	public List<Fruits> findByNameStartingWith(String start);
//	public List<Fruits> findByNameEndingWith(String end);
}
