# memSQL Take Home

#### Deliverables
Build a standalone prototype web page in
HTML/CSS/Javascript. The design along with component interactions and logical flow is in the
provided design file on Figma.

### Allowed Third Party Libraries
1. jQuery (no plugins)
2. Font Awesome
3. Google Fonts

### Requirements
1. The first page the user will see is the "Book a Demo" page. This page renders a form
that includes 3 fields: email, business size, and importance indicator. All three fields are
required.
2. The first field (email) is a text field that should validate that the user has entered a valid
email. A valid email should be checked using a reasonable javascript regex.
3. The second field (business size) is a dropdown field that contains the following options:
1-10, 11-50, 51-100, 101-250, 250+
4. The third field (importance indicator) is a radio-button set which contains 8 options.
These options are mutually-exclusive, such that if you select one, the rest are
deselected.
5. When the user clicks the button labeled "Continue to Schedule a Time", the form should
be checked for validity. If the user has made any errors while filling out the form, an
appropriate error should be shown under the incorrect fields and the user should be
required to fix the errors before continuing.
6. Once the form is valid, clicking the continue button will transition the user to one of two
possible pages. This decision is based on checking to see if the user selected one of the
following options:

business size -> 1-10
importance indicator -> Document Storage, Full Text Search, Price

If the user selected any of the above options in either of the second or third fields, then
that user is "unqualified" and should be shown the unqualified lead page. If the user is
not unqualified, then they should be shown the qualified lead page.

####Mobile Optimization & Scaling
