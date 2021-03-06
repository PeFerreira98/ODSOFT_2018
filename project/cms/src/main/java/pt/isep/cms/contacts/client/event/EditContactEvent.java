package pt.isep.cms.contacts.client.event;

import com.google.gwt.event.shared.GwtEvent;

public class EditContactEvent extends GwtEvent<EditContactEventHandler> {
    public static final Type<EditContactEventHandler> TYPE = new Type<EditContactEventHandler>();
    private final int id;

    public EditContactEvent(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public Type<EditContactEventHandler> getAssociatedType() {
        return TYPE;
    }

    @Override
    protected void dispatch(EditContactEventHandler handler) {
        handler.onEditContact(this);
    }
}
