package pt.isep.cms.contacts.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

import pt.isep.cms.contacts.shared.Contact;
import pt.isep.cms.contacts.shared.ContactDetails;

import java.util.ArrayList;

public interface ContactsServiceAsync {

    public void addContact(Contact contact, AsyncCallback<Contact> callback);

    public void deleteContact(int id, AsyncCallback<Boolean> callback);

    public void deleteContacts(ArrayList<Integer> ids, AsyncCallback<ArrayList<ContactDetails>> callback);

    public void getContactDetails(AsyncCallback<ArrayList<ContactDetails>> callback);

    public void getContact(int id, AsyncCallback<Contact> callback);

    public void updateContact(Contact contact, AsyncCallback<Contact> callback);
}
