// modal for main content

const modal = document.getElementById('dynamicModal');
const modalClose = document.querySelector('.dclose');
const modalTitle = document.getElementById('dmodalHeader');
const rightsContent = document.querySelector('.rights-list');

// Event listener for grid items
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('click', function() {
    const itemText = this.innerText;  // Get the text of the clicked grid item
    modal.style.display = 'block';
    // Update modal title and content dynamically based on the clicked grid item
    updateModalContent(itemText);
  });
});

// Function to update the modal content based on clicked grid item
function updateModalContent(itemText) {
  // Set modal title
    modalTitle.innerText = itemText;

  // Update modal content based on the clicked grid item
  let content = '';

  // Example: Content mapping for each grid item
  if (itemText.includes('Constitutional and Civil Rights')) {
    content = `
      <li>
    <h4>Right to Equality (Article 14)</h4>
    <p>Equal protection of the law and prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.</p>
    </li>

    <li>
    <h4>Right to Freedom of Speech and Expression (Article 19)</h4>
    <p>Freedom to express opinions freely without interference, subject to reasonable restrictions like public order, decency, and morality.</p>
    </li>

    <li>
    <h4>Right to Protection from Exploitation (Article 23)</h4>
    <p>Prohibition of human trafficking, forced labor, and other forms of exploitation. Violation is punishable under IPC Sections 370 and 374.</p>
    </li>

    <li>
    <h4>Right to Freedom of Religion (Article 25)</h4>
    <p>Freedom of conscience and the right to freely profess, practice, and propagate any religion.</p>
    </li>

    <li>
    <h4>Right to Constitutional Remedies (Article 32)</h4>
    <p>The right to move the Supreme Court or High Courts for enforcement of fundamental rights through writ petitions (such as habeas corpus, mandamus, etc.).</p>
    </li>


    `;
  } else if (itemText.includes('Criminal Law')) {
    content = `
      <li>
    <h4>Right to Fair Trial (Article 21)</h4>
    <p>Every individual accused of a crime is entitled to a fair and public trial by an independent and impartial court. Supported by Section 304 of the Criminal Procedure Code (CrPC) for legal aid.</p>
    </li>

    <li>
    <h4>Right Against Self-Incrimination (Article 20(3))</h4>
    <p>No person accused of an offense shall be compelled to be a witness against themselves. This is a fundamental protection against self-incrimination.</p>
    </li>

    <li>
    <h4>Right to Legal Representation (Section 303, CrPC)</h4>
    <p>Every person accused of an offense has the right to be defended by a lawyer of their choice.</p>
    </li>

    <li>
    <h4>Right to Bail (Section 436, CrPC)</h4>
    <p>An accused person has the right to be released on bail, depending on the nature of the offense (bailable or non-bailable).</p>
    </li>

    <li>
    <h4>Protection Against Arbitrary Arrest (Article 22, CrPC Section 50)</h4>
    <p>The right to be informed of the grounds of arrest and the right to consult a legal practitioner immediately after the arrest.</p>
    </li>
    `;
  } else if (itemText.includes('Consumer Protection Law')) {
    content = `
      <li>
  <h4>Right to Safety (Consumer Protection Act, 2019)</h4>
  <p>Consumers have the right to be protected against goods and services that are hazardous to life and property.</p>
</li>

<li>
  <h4>Right to Information (Consumer Protection Act, 2019)</h4>
  <p>Consumers are entitled to information regarding the quality, purity, potency, price, and standard of goods or services to protect them from unfair practices.</p>
</li>

<li>
  <h4>Right to Choose (Consumer Protection Act, 2019)</h4>
  <p>The right to access a variety of goods and services at competitive prices and to be assured of satisfying the basic needs.</p>
</li>

<li>
  <h4>Right to Redress (Consumer Protection Act, 2019)</h4>
  <p>Consumers have the right to seek redressal against unfair or restrictive trade practices through consumer courts at different levels.</p>
</li>

<li>
  <h4>Right to Consumer Education (Consumer Protection Act, 2019)</h4>
  <p>Consumers have the right to be educated about their rights and responsibilities, helping them make informed choices.</p>
</li>
    `;
  }

  else if (itemText.includes('Family Law')) {
    content = `
        <li>
    <h4>Right to Maintenance (Section 125, CrPC)</h4>
    <p>Women, children, and elderly parents have the right to claim maintenance from their spouse, father, or children respectively, if they are unable to support themselves.</p>
    </li>

    <li>
    <h4>Right to Divorce (Hindu Marriage Act, 1955 / Special Marriage Act, 1954)</h4>
    <p>Both husband and wife have the right to divorce under specific conditions like cruelty, adultery, desertion, or mutual consent.</p>
    </li>

    <li>
    <h4>Right to Adoption (Hindu Adoption and Maintenance Act, 1956)</h4>
    <p>Any male or female of sound mind and eligible can adopt a child under the provisions of this Act.</p>
    </li>

    <li>
    <h4>Right to Custody of Children (Guardians and Wards Act, 1890)</h4>
    <p>In case of a divorce, both parents have the right to apply for the custody of their children, and the court decides based on the best interests of the child.</p>
    </li>

    <li>
    <h4>Right to Inheritance (Hindu Succession Act, 1956)</h4>
    <p>Daughters and sons have equal rights to inherit property from their parents, with recent amendments granting daughters the same status as sons in ancestral property.</p>
    </li>

    `;
  }

  else if (itemText.includes('Labor Law')) {
    content = `
      <li>
    <h4>Right to Fair Wages</h4>
    <p>Employees have the right to receive fair wages for their work, including compliance with minimum wage laws.</p>
  </li>

  <li>
    <h4>Right to Safe Working Conditions</h4>
    <p>Workers are entitled to a safe and healthy working environment free from hazards that can cause injury or illness.</p>
  </li>

  <li>
    <h4>Right to Non-Discrimination</h4>
    <p>Employees have the right to work in an environment free from discrimination based on race, gender, religion, or disability.</p>
  </li>

  <li>
    <h4>Right to Join Trade Unions</h4>
    <p>Workers have the right to organize and join trade unions for collective bargaining and representation.</p>
  </li>

  <li>
    <h4>Right to Paid Leave</h4>
    <p>Employees are entitled to various forms of paid leave, including sick leave, maternity leave, and vacation time.</p>
  </li>
    `;
  }

  else if (itemText.includes('Taxation Law')) {
    content = `
      <li>
    <h4>Right to Fair Taxation</h4>
    <p>Taxpayers have the right to be taxed fairly and equitably, without discrimination.</p>
  </li>

  <li>
    <h4>Right to Access Information</h4>
    <p>Taxpayers have the right to access information regarding their tax obligations and available deductions and credits.</p>
  </li>

  <li>
    <h4>Right to Appeal</h4>
    <p>Taxpayers can appeal against tax assessments or decisions made by tax authorities.</p>
  </li>

  <li>
    <h4>Right to Privacy</h4>
    <p>Taxpayers have the right to confidentiality regarding their tax information and financial records.</p>
  </li>

  <li>
    <h4>Right to Legal Representation</h4>
    <p>Taxpayers have the right to seek legal representation during tax disputes or audits.</p>
  </li>
    `;
  }

  else if (itemText.includes('Traffic and Motor Vehicle Law')) {
    content = `
      
  <li>
    <h4>Right to Safe Roads</h4>
    <p>All individuals have the right to use roads that are safe and free from hazards.</p>
  </li>

  <li>
    <h4>Right to Due Process in Traffic Violations</h4>
    <p>Drivers have the right to a fair hearing and appeal process for any traffic violations they are accused of.</p>
  </li>

  <li>
    <h4>Right to Access Traffic Information</h4>
    <p>Individuals have the right to access information regarding traffic laws, regulations, and enforcement practices.</p>
  </li>

  <li>
    <h4>Right to Fair Treatment by Law Enforcement</h4>
    <p>Drivers have the right to be treated fairly and without discrimination by law enforcement officers during traffic stops.</p>
  </li>

  <li>
    <h4>Right to Insurance Coverage</h4>
    <p>Drivers are entitled to have access to insurance coverage that complies with legal requirements for vehicle operation.</p>
  </li>
</ul>

    `;
  }

  else if (itemText.includes('Property Law')) {
    content = `
      <ul>
  <li>
    <h4>Right to Own Property</h4>
    <p>Individuals have the right to own, use, and dispose of property as per legal provisions.</p>
  </li>

  <li>
    <h4>Right to Lease Property</h4>
    <p>Property owners have the right to lease their property under mutually agreed terms and conditions.</p>
  </li>

  <li>
    <h4>Right to Access to Property Records</h4>
    <p>Individuals have the right to access property records for verification of ownership and other interests.</p>
  </li>

  <li>
    <h4>Right to Contest Property Disputes</h4>
    <p>Property owners have the right to seek legal remedies in case of disputes regarding property rights.</p>
  </li>

  <li>
    <h4>Right to Fair Compensation</h4>
    <p>Property owners have the right to receive fair compensation in cases of eminent domain or property acquisition by the state.</p>
  </li>
</ul>
`;
  }

  else if (itemText.includes('RTI Law')) {
    content = `
  <li>
    <h4>Right to Access Information</h4>
    <p>Citizens have the right to request information held by public authorities to promote transparency.</p>
  </li>

  <li>
    <h4>Right to Timely Responses</h4>
    <p>Public authorities are required to respond to information requests within a specified timeframe.</p>
  </li>

  <li>
    <h4>Right to Appeal</h4>
    <p>Citizens have the right to appeal against refusals or inadequate responses to their information requests.</p>
  </li>

  <li>
    <h4>Right to Protection from Harassment</h4>
    <p>Individuals who request information under RTI are protected from harassment or discrimination.</p>
  </li>

  <li>
    <h4>Right to Information about Public Expenditure</h4>
    <p>Citizens have the right to access information regarding public spending and government accountability.</p>
  </li>
</ul>

    `;
  }
  
  // Insert the new content into the modal
  rightsContent.innerHTML = content;
}

// Close the modal when the 'x' button is clicked
modalClose.addEventListener('click', ()=> {
  modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


