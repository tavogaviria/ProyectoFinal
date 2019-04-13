package com.hbt.semillero.dto;

import java.io.Serializable;

public class VehiculoDTO implements Serializable {
	
	/**
	 * Serial
	 */
	private static final long serialVersionUID = 1L;
	
	private Long idVehiculo;

	private int modelo;

	private String placa;

	private LineaDTO linea;

	/**
	 * Retorna el identificador unico del vehiculo
	 */
	public Long getIdVehiculo() {
		return idVehiculo;
	}

	/**
	 * EStablece el identificador unico del vehiculo
	 */
	public void setIdVehiculo(Long idVehiculo) {
		this.idVehiculo = idVehiculo;
	}

	/**
	 * Retorna el año del modelo del vehiculo
	 */
	public int getModelo() {
		return modelo;
	}

	/**
	 * EStablece del año del modelo del vehiculo
	 */
	public void setModelo(int modelo) {
		this.modelo = modelo;
	}

	/**
	 * Retorna el numero de placa del vehiculo
	 */
	public String getPlaca() {
		return placa;
	}

	/**
	 * EStablece el numero de placa del vehiculo
	 */
	public void setPlaca(String placa) {
		this.placa = placa;
	}

	/**
	 * Retorna el modelo de la lineas establecidas en el sistema
	 */
	public LineaDTO getLinea() {
		return linea;
	}

	/**
	 * Establece el modelo de la lineas establecidas en el sistema
	 */
	public void setLinea(LineaDTO linea) {
		this.linea = linea;
	}
	
	

}
