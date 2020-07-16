import React from 'react';

const Contacts: React.FC = () => (
  <div id='contentContacts'>
    <h2>Contacts</h2>

    <table>
      <tr>
        <td>Location</td>
        <td>Vilnius, Lithuania</td>
      </tr>
      <tr>
        <td>Find me in</td>
        <td>
          <div>
            <a
              href='https://www.linkedin.com/in/laimonas-katkus-ba334071/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href='https://github.com/lkatkus'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
          <div>
            <a
              href='https://dev.to/lkatkus'
              target='_blank'
              rel='noreferrer'
            >
              dev.to
            </a>
          </div>
        </td>
      </tr>
    </table>
  </div>
);

export default Contacts;
