package com.example.wesdom.directorio.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "ADRDOM")
public class Address implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4740783361965400544L;

	/*
	 * -----------------------------------------------------------------------------
	 * -----------------------------------------------------------------------------
	 * -------
	 * Attributes
	 * -----------------------------------------------------------------------------
	 * -----------------------------------------------------------------------------
	 * -------
	 */
	/**
	 * Name of the column IDEADR
	 * The id of the class and entity
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDEADR", unique = true, nullable = false)
	private Long id;

	/**
	 * Name of the column LABADR
	 * the identifier or type of the address
	 */
	@Column(name = "LABADR", length = 10)
	private String label;

	/**
	 * Name of the column ADRADR
	 * the address
	 */
	@Column(name = "ADRADR", length = 200, nullable = false)
	private String address;

	/**
	 * Name of the column CONADR
	 * the FK of contac entity
	 */
	@ManyToOne(cascade = { CascadeType.MERGE, CascadeType.PERSIST }, fetch = FetchType.LAZY)
	@JoinColumn(name = "CONADR", nullable = false)
	private Contact contactId;

	/*
	 * -----------------------------------------------------------------------------
	 * -----------------------------------------------------------------------------
	 * -------
	 * Constructor
	 * -----------------------------------------------------------------------------
	 * -----------------------------------------------------------------------------
	 * -------
	 */
	/**
	 * Constructor of the class Address without parameters
	 */
	public Address() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Constructor of the class Address with the attributes by parameter
	 * 
	 * @param id
	 * @param label
	 * @param address
	 */
	/*
	 * -----------------------------------------------------------------------------
	 * -----------------------------------------------------------------------------
	 * -------
	 * Methods
	 * -----------------------------------------------------------------------------
	 * -----------------------------------------------------------------------------
	 * -------
	 */

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getContactId() {
		return contactId.getId();
	}

	public void setContactId(Contact contactId) {
		this.contactId = contactId;
	}

	public boolean hasContact() {
		return contactId != null;
	}
}
