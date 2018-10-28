package com.laundryfit.util;

public class ElaborateOrderDetails {
	public static String elaborateOrderDetails(String orderDetails) {
		String[] splitedOrder = orderDetails.split(",");
		StringBuilder compositOrder = new StringBuilder();
		for (int index = 0; index < splitedOrder.length; index++) {
			double value = Double.parseDouble(splitedOrder[index]);
			if(index == 0 && value > 0) {
				compositOrder.append("T-Shirt(M&I): "+value+", ");
			} else if(index == 1 && value > 0) {
				compositOrder.append("Shirt(M&I): "+value+", ");
			} else if(index == 2 && value > 0) {
				compositOrder.append("Jeans(M&I): "+value+", ");
			} else if(index == 3 && value > 0) {
				compositOrder.append("Trouser(M&I): "+value+", ");
			} else if(index == 4 && value > 0) {
				compositOrder.append("Lungi/Dhoti(M&I): "+value+", ");
			} else if(index == 5 && value > 0) {
				compositOrder.append("Suits/Blazer(M&I): "+value+", ");
			} else if(index == 6 && value > 0) {
				compositOrder.append("Kurta(M&I): "+value+", ");
			} else if(index == 7 && value > 0) {
				compositOrder.append("T-Shirt(W&I): "+value+", ");
			} else if(index == 8 && value > 0) {
				compositOrder.append("Shirt(W&I): "+value+", ");
			} else if(index == 9 && value > 0) {
				compositOrder.append("Jeans(W&I): "+value+", ");
			} else if(index == 10 && value > 0) {
				compositOrder.append("Trouser(W&I): "+value+", ");
			} else if(index == 11 && value > 0) {
				compositOrder.append("Saree(W&I): "+value+", ");
			} else if(index == 12 && value > 0) {
				compositOrder.append("Suits/Blazer(W&I): "+value+", ");
			} else if(index == 13 && value > 0) {
				compositOrder.append("Salwar/Kurta(W&I): "+value+", ");
			} else if(index == 14 && value > 0) {
				compositOrder.append("Kid's wears(K&I): "+value+", ");
			} else if(index == 15 && value > 0) {
				compositOrder.append("Light Cover(H&I): "+value+", ");
			} else if(index == 16 && value > 0) {
				compositOrder.append("Heavy Cover(H&I): "+value+", ");
			} else if(index == 17 && value > 0) {
				compositOrder.append("T-Shirt(M&F): "+value+", ");
			} else if(index == 18 && value > 0) {
				compositOrder.append("Shirt(M&F): "+value+", ");
			} else if(index == 19 && value > 0) {
				compositOrder.append("Jeans(M&F): "+value+", ");
			} else if(index == 20 && value > 0) {
				compositOrder.append("Trouser(M&F): "+value+", ");
			} else if(index == 21 && value > 0) {
				compositOrder.append("Lungi/Dhoti(M&F): "+value+", ");
			} else if(index == 22 && value > 0) {
				compositOrder.append("SuitsBlazer(M&F): "+value+", ");
			} else if(index == 23 && value > 0) {
				compositOrder.append("Kurta(M&F): "+value+", ");
			} else if(index == 24 && value > 0) {
				compositOrder.append("Cargos-Short/Pyjama(M&F): "+value+", ");
			} else if(index == 25 && value > 0) {
				compositOrder.append("Sweatshirt/Jacket(M&F): "+value+", ");
			} else if(index == 26 && value > 0) {
				compositOrder.append("Inner-Wear(M&F): "+value+", ");
			} else if(index == 27 && value > 0) {
				compositOrder.append("T-Shirt(W&F): "+value+", ");
			} else if(index == 28 && value > 0) {
				compositOrder.append("Shirt(W&F): "+value+", ");
			} else if(index == 29 && value > 0) {
				compositOrder.append("Jeans(W&F): "+value+", ");
			} else if(index == 30 && value > 0) {
				compositOrder.append("Trouser(W&F): "+value+", ");
			} else if(index == 31 && value > 0) {
				compositOrder.append("Saree(W&F): "+value+", ");
			} else if(index == 32 && value > 0) {
				compositOrder.append("Suits/Blazer(W&F): "+value+", ");
			} else if(index == 33 && value > 0) {
				compositOrder.append("Salwar/Kurta(W&F): "+value+", ");
			} else if(index == 34 && value > 0) {
				compositOrder.append("Cargos-Short/Pyjama(W&F): "+value+", ");
			} else if(index == 35 && value > 0) {
				compositOrder.append("Sweatshirt/Jacket(W&F): "+value+", ");
			} else if(index == 36 && value > 0) {
				compositOrder.append("Inner-Wear(W&F): "+value+", ");
			} else if(index == 37 && value > 0) {
				compositOrder.append("Kid's wears(K&F): "+value+", ");
			} else if(index == 38 && value > 0) {
				compositOrder.append("Light Cover(H&F): "+value+", ");
			} else if(index == 39 && value > 0) {
				compositOrder.append("Heavy Cover(H&F): "+value+", ");
			} else if(index == 40 && value > 0) {
				compositOrder.append("Towel(H&F): "+value);
			} else if(index == 41 && value > 0) {
				compositOrder.append("Hand Towel(H&F): "+value+", ");
			} else if(index == 42 && value > 0) {
				compositOrder.append("Carpet[per sq. ft.](H&F): "+value+", ");
			}
		}
		String elaborativOrder = compositOrder.toString();
		return elaborativOrder;
	}
}
