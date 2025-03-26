import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function KISSPrinciplePage() {
  return (
    <ContentLayout
      title="KISS Principle"
      description="Learn about the Keep It Simple, Stupid (KISS) principle and how to apply it to write clearer, more maintainable code."
    >
      <ContentSection title="Introduction to KISS">
        <p>
          The KISS (Keep It Simple, Stupid) principle states that most systems work best if they are kept simple rather than made complicated. This principle emphasizes the importance of simplicity in design and implementation.
        </p>
      </ContentSection>

      <ContentSection title="Basic KISS Examples">
        <h3 className="text-lg font-medium text-white mb-2">Simple vs Complex Solutions</h3>
        <CodeExample
          title="KISS Example"
          code={`// Bad: Overcomplicated solution
function processUserData(user) {
  const processedData = {
    personalInfo: {
      fullName: user.firstName + ' ' + user.lastName,
      age: calculateAge(user.dateOfBirth),
      address: formatAddress(user.address)
    },
    preferences: {
      theme: user.theme || 'default',
      notifications: user.notifications || true
    }
  };
  
  return processedData;
}

// Good: Simple and straightforward
function processUserData(user) {
  return {
    name: user.firstName + ' ' + user.lastName,
    age: calculateAge(user.dateOfBirth),
    address: user.address,
    theme: user.theme || 'default',
    notifications: user.notifications ?? true
  };
}`}
          description="Example of applying KISS principle to data processing"
        />
      </ContentSection>

      <ContentSection title="KISS in Function Design">
        <h3 className="text-lg font-medium text-white mb-2">Function Implementation</h3>
        <CodeExample
          title="Function KISS Example"
          code={`// Bad: Complex function with multiple responsibilities
function validateAndProcessOrder(order) {
  if (!order) {
    throw new Error('Order is required');
  }
  
  const validationResults = {
    isValid: true,
    errors: []
  };
  
  if (!order.items || order.items.length === 0) {
    validationResults.isValid = false;
    validationResults.errors.push('Order must contain at least one item');
  }
  
  if (!order.customer) {
    validationResults.isValid = false;
    validationResults.errors.push('Customer information is required');
  }
  
  if (!validationResults.isValid) {
    return validationResults;
  }
  
  const processedOrder = {
    ...order,
    total: calculateTotal(order.items),
    status: 'pending',
    createdAt: new Date()
  };
  
  return processedOrder;
}

// Good: Simple, focused functions
function validateOrder(order) {
  if (!order) {
    throw new Error('Order is required');
  }
  
  const errors = [];
  if (!order.items?.length) {
    errors.push('Order must contain at least one item');
  }
  if (!order.customer) {
    errors.push('Customer information is required');
  }
  
  return errors;
}

function processOrder(order) {
  return {
    ...order,
    total: calculateTotal(order.items),
    status: 'pending',
    createdAt: new Date()
  };
}`}
          description="Example of applying KISS principle to function design"
        />
      </ContentSection>

      <ContentSection title="KISS in Component Design">
        <h3 className="text-lg font-medium text-white mb-2">Component Structure</h3>
        <CodeExample
          title="Component KISS Example"
          code={`// Bad: Overly complex component
function UserProfile({ user, onUpdate, onDelete, onShare }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [validationErrors, setValidationErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    await onUpdate(formData);
    setIsEditing(false);
  };
  
  return (
    <div className="user-profile">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {/* Complex form with many fields */}
        </form>
      ) : (
        <div className="profile-view">
          {/* Complex view with many sections */}
        </div>
      )}
    </div>
  );
}

// Good: Simple, focused components
function UserProfile({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="user-profile">
      {isEditing ? (
        <EditProfileForm
          user={user}
          onSubmit={onUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileView
          user={user}
          onEdit={() => setIsEditing(true)}
        />
      )}
    </div>
  );
}`}
          description="Example of applying KISS principle to component design"
        />
      </ContentSection>

      <ContentSection title="KISS in State Management">
        <h3 className="text-lg font-medium text-white mb-2">State Management</h3>
        <CodeExample
          title="State Management KISS Example"
          code={`// Bad: Complex state management
const initialState = {
  user: null,
  settings: {
    theme: 'light',
    notifications: true,
    language: 'en'
  },
  data: {
    items: [],
    loading: false,
    error: null
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload
        }
      };
    case 'FETCH_DATA_START':
      return {
        ...state,
        data: {
          ...state.data,
          loading: true,
          error: null
        }
      };
    // ... many more cases
  }
}

// Good: Simple state management
function useUserState() {
  const [user, setUser] = useState(null);
  return { user, setUser };
}

function useSettings() {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    language: 'en'
  });
  return { settings, setSettings };
}

function useData() {
  const [data, setData] = useState({
    items: [],
    loading: false,
    error: null
  });
  return { data, setData };
}`}
          description="Example of applying KISS principle to state management"
        />
      </ContentSection>

      <ContentSection title="Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Break down complex problems into smaller, manageable pieces</li>
          <li>Use clear, descriptive names for variables and functions</li>
          <li>Avoid premature optimization</li>
          <li>Keep functions focused and single-purpose</li>
          <li>Use standard library functions when available</li>
          <li>Minimize the number of dependencies</li>
          <li>Write self-documenting code</li>
          <li>Regularly review and simplify code</li>
          <li>Consider the maintainability of your solutions</li>
          <li>Get feedback from team members</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 