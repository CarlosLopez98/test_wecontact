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

@Entity(name = "PHODOM")
public class Phone implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1068401382172754017L;

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
	 * Name of the column IDEPHO
	 * The id of the class and entity
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDEPHO", unique = true, nullable = false)
	private Long id;

	/**
	 * Name of the column COUPHO
	 * the code number that represents the country
	 */
	@Column(name = "COUPHO", length = 2)
	private String country;

	/**
	 * Name of the column LABPHO
	 * the identifier of category of the phone number
	 */
	@Column(name = "LABPHO", length = 10)
	private String label;

	/**
	 * Name of the column NUMPHO
	 * the phone number
	 */
	@Column(name = "NUMPHO", nullable = false, length = 15)
	private String number;

	/**
	 * Name of the column CONPHO
	 * the phone number
	 */
	@ManyToOne(cascade = { CascadeType.MERGE,
			CascadeType.PERSIST }, fetch = FetchType.LAZY)
	@JoinColumn(name = "CONPHO", nullable = false)
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
	 * Constructor of the class Phone without parameters
	 */
	public Phone() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Constructor of the class Phone with the attributes by parameter
	 * 
	 * @param id      - the unique code
	 * @param country - the code number that represents the country
	 * @param label   - the identifier of category of the phone number
	 * @param number  - the phone number
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
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
