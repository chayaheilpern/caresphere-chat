import "amazon-connect-streams"

// Initialize the Streams API
connect.core.initCCP({
  // CCP configuration options
  ccpUrl: 'https://caresphere-communication.my.connect.aws/ccp-v2',
  // Other configuration options...

  // onSuccessfulInit: function (contactContext) {
  //     // Access information about the ongoing contact
  //     var contact = contactContext.getContact();
  //     if (contact) {
  //         // Example: Get existing customer attributes
  //         var existingAttributes = contact.getAttributes();
  //         console.log(existingAttributes)

  //         // Example: Update the 'name' attribute
  //         existingAttributes.Customer.FirstName = 'Chaya';

  //         // Example: Update contact attributes
  //         contact.updateContactAttributes(existingAttributes);
  //     }
  // },

  
  // CCP initialization callback
  // onSuccessfulInit: function (contactContext) {
  //     // Set contact attributes after initialization
  //     var contact = contactContext.getContact();
  //     if (contact) {
  //         contact.setAttributes({
  //             first: 'chaya',
  //             last: 'heilpern',
  //         });
  //     }
  // },
})