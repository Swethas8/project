package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.Fruits;
import com.example.demo.service.ApiService;

@RestController

@RequestMapping("/fruit")
public class ApiController 
{

	@Autowired
	ApiService service;
    
	@CrossOrigin
	@PostMapping("")
	public String create(@RequestBody Fruits fruit)
	{
		return service.addFruit(fruit);
	}
	@CrossOrigin
	@GetMapping("")
	public List<Fruits>read()
	{
	return service.getFruit();
	}
	@CrossOrigin
	@GetMapping("/{id}")
	public Optional<Fruits>read(@PathVariable int id)
	{
		return service.getFruitsById(id);
	}
	@CrossOrigin
	@PutMapping("/{id}")
	public String update(@RequestBody Fruits fruit)
	{
		return service.updateFruit(fruit);
	}
	@CrossOrigin
	@DeleteMapping("/{id}")
	public String delete(@PathVariable int id)
	{
		return service.deleteFruitById(id);
	}
	
//	@GetMapping("/{field}")
//	public List<Fruits>fruitWithSort(@PathVariable String field)
//	{
//	return service.getFruitSorted(field);
//	}
//	
//	@GetMapping("/{offset}/{pageSize}")
//	public List<Fruits>fruitWithPagination(@PathVariable int offset,@PathVariable int pageSize)
//	{
//	return service.getFruitWithPagination(offset, pageSize);
//	}
//	
//	@GetMapping("/{offset}/{pageSize}/{field}")
//	public List<Fruits>getFruitWithPaginationAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field)
//	{
//	return service.getFruitWithPaginationAndSorting(offset, pageSize,field);
	}

