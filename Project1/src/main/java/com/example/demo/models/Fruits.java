package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Fruits {

	@Id
	private int id;
	private String cusName;
	private long cusNo;
	private String name;
	private String color;
	private int quantity;
	private String typeOfFruit;
	private int price;
	private float discount;
	public String getCusName() {
		return cusName;
	}
	public void setCusName(String cusName) {
		this.cusName=cusName;
	}
	public long getCusNo() {
		return cusNo;
	}
	public void setCusNo(long cusNo) {
		this.cusNo=cusNo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getTypeOfFruit() {
		return typeOfFruit;
	}
	public void setTypeOfFruit(String typeOfFruit) {
		this.typeOfFruit = typeOfFruit;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount=discount;
	}
	@Override
	public String toString() {
		return "Fruits [cusName=" + cusName + ", cusNo=" + cusNo + ", id=" + id + ", name=" + name + ", color=" + color
				+ ", quantity=" + quantity + ", typeOfFruit=" + typeOfFruit + ", price=" + price + ", discount="
				+ discount + "]";
	}
	
}
