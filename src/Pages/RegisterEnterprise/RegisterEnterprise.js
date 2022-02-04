import React from 'react';
import { RegisterEnterpriseContainer, RegisterEnterpriseCoverSection, RegisterEnterpriseInfo, RegisterEnterpriseSection1,RegisterEnterpriseInfoTitle } from './RegisterEnterpriseElements';

const RegisterEnterprise = () => {
  return <div>
      <RegisterEnterpriseContainer>
          <RegisterEnterpriseCoverSection>
                <h1>Register Enterprise</h1>
          </RegisterEnterpriseCoverSection>
          <RegisterEnterpriseSection1>
              <RegisterEnterpriseInfo>
                  <RegisterEnterpriseInfoTitle>
                        Register Enterprise
                    </RegisterEnterpriseInfoTitle>
              </RegisterEnterpriseInfo>
          </RegisterEnterpriseSection1>
      </RegisterEnterpriseContainer>
  </div>;
};

export default RegisterEnterprise;
