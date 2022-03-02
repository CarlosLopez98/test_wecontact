package com.example.wesdom.directorio.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name = "CONDOM")
public class Contact implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8718370828166749874L;

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
	 * Name of the column IDECON
	 * The id of the class and entity
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDECON", unique = true, nullable = false)
	private Long id;

	/**
	 * Name of the column NAMCON
	 * the first and middle name of the contact
	 */
	@Column(name = "NAMCON", length = 20)
	private String name;

	/**
	 * Name of the column SURCON
	 * the last name of the contact
	 */
	@Column(name = "SURCON", length = 20)
	private String surname;

	/**
	 * Name of the column PHTCON
	 * the path to the photo
	 */
	@Column(name = "PHTCON", length = 255)
	private String photo;

	/**
	 * Name of the column BIRCON
	 * the date of contact's birthday
	 */
	@Column(name = "BIRCON", length = 10)
	private String birthday;

	/**
	 * List of all phone numbers related to this contact
	 * cascade = CascadeType.ALL,
	 * fetch = FetchType.LAZY,
	 */
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "contactId")
	private List<Phone> phones;

	/**
	 * List of all addresses related to this contact
	 * cascade = CascadeType.ALL,
	 * fetch = FetchType.LAZY,
	 */
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "contactId")
	private List<Address> addresses;

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
	 * Constructor of the class Contact without parameters
	 */
	public Contact() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Constructor of the class Contact with the attributes by parameter
	 * 
	 * @param id
	 * @param name
	 * @param surname
	 * @param photo
	 * @param birthday
	 * @param phones
	 * @param addresses
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public List<Phone> getPhones() {
		return phones;
	}

	public void addPhone(Phone newPhone) {
		if (phones == null) {
			phones = new ArrayList<Phone>();
		}

		phones.add(newPhone);

		newPhone.setContactId(this);
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void addAddress(Address newAddress) {
		if (addresses == null) {
			addresses = new ArrayList<Address>();
		}

		addresses.add(newAddress);

		newAddress.setContactId(this);
	}

}
