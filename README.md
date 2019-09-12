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

#### Mobile Optimization & Scaling
The design is only intended to work in a web-browser on a desktop device, not on mobile devices. That said - it should handle some scaling due to different window sizes. With that in mind, the content should stay in the center of any window which is wider than the width of the content. The content width should stay constant, not be a percentage of the window size. If the window is less wide than the content, a horizontal scrollbar should show up for the user to navigate the page.

#### Interactions
In the design there is a page called "Interactions". This page should not be created in the solution - but serves as an example of the various states each of the components can have.
The dropdown component can be very basic. When the user clicks the field - a menu is shown to the user with the options. The user can make a selection via clicking an option with their mouse. Once an option is selected the dropdown should close and the selected option should be shown in the dropdown's field. If the user clicks outside of the menu the dropdown should close, and the previous option should remain selected.

#### Images/Icons
All of the icons in the design are from Font Awesome which you are allowed to use in your project.
The only other image in the design is the logo which you can download from https://brandfolder.com/memsql. The one you want is the SVG.
Everything else should be done with CSS.

#### Submission 
To submit your result please package up all relevant files into either a ZIP or TAR file and send it through Greenhouse via the provided link in the email.
The submission should include an index.html file which should open in a web-browser running from the local filesystem. All paths to other files should be relative. The html may load Font Awesome and jQuery from a CDN rather than vendoring them locally.
The submission should run correctly in a recent version of Chrome and Firefox. Other browsers will not be tested.
