package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.demo.models.Fruits;
import com.example.demo.repositories.FruitRepo;

@Service
public class ApiService
{
	@Autowired
	FruitRepo repository;
	
	public String addFruit(Fruits fruit)
	{
		repository.save(fruit);
		return "Data is added";
	}
	
	public List<Fruits>getFruit()
	{
		return repository.findAll();
	}
	
	public Optional<Fruits>getFruitsById(int id)
	{
		return repository.findById(id);
	}
	
	public String updateFruit(Fruits fruit)
	{
		repository.save(fruit);
		return "Updated";
	}
	
	public String deleteFruitById(int id)
	{
		repository.deleteById(id);
		return "Data is deleted";
	}
//	
//	public List<Fruits>getFruitSorted(String field)
//	{
//		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
//	}
//	
//	public List<Fruits>getFruitWithPagination(int offset,int pageSize)
//	{
//		Page<Fruits> page=repository.findAll(PageRequest.of(offset, pageSize));
//		return page.getContent();
//	}
//	
//	public List<Fruits>getFruitWithPaginationAndSorting(int offset,int pageSize,String field)
//	{
//		Page<Fruits>page=repository.findAll(PageRequest.of(offset, pageSize,Sort.by(field)));
//		return page.getContent();
//	}
}
