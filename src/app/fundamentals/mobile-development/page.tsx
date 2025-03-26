import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import CodeExample from '@/components/content/CodeExample';

export default function MobileDevelopmentPage() {
  return (
    <ContentLayout
      title="Mobile Development"
      description="Learn about mobile app development, including native, hybrid, and cross-platform approaches."
    >
      <ContentSection title="Introduction to Mobile Development">
        <p>
          Mobile development involves creating applications for mobile devices. Developers can choose between native, hybrid, or cross-platform approaches based on their requirements.
        </p>
      </ContentSection>

      <ContentSection title="Native Development">
        <h3 className="text-lg font-medium text-white mb-2">iOS Development (Swift)</h3>
        <p>
          Develop native iOS applications using Swift.
        </p>
        <CodeExample
          title="Swift UI Example"
          code={`import SwiftUI

struct ContentView: View {
    @State private var username = ""
    @State private var password = ""
    
    var body: some View {
        VStack {
            TextField("Username", text: $username)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            SecureField("Password", text: $password)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()
            
            Button(action: {
                // Handle login
            }) {
                Text("Login")
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.blue)
                    .cornerRadius(10)
            }
            .padding()
        }
    }
}`}
          description="Example of Swift UI implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Android Development (Kotlin)</h3>
        <p>
          Develop native Android applications using Kotlin.
        </p>
        <CodeExample
          title="Kotlin Android Example"
          code={`class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        binding.loginButton.setOnClickListener {
            val username = binding.usernameInput.text.toString()
            val password = binding.passwordInput.text.toString()
            handleLogin(username, password)
        }
    }
    
    private fun handleLogin(username: String, password: String) {
        // Handle login logic
    }
}`}
          description="Example of Kotlin Android implementation"
        />
      </ContentSection>

      <ContentSection title="Cross-Platform Development">
        <h3 className="text-lg font-medium text-white mb-2">React Native</h3>
        <p>
          Build cross-platform mobile apps using React Native.
        </p>
        <CodeExample
          title="React Native Example"
          code={`import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;`}
          description="Example of React Native implementation"
        />

        <h3 className="text-lg font-medium text-white mt-4 mb-2">Flutter</h3>
        <p>
          Create beautiful cross-platform apps using Flutter.
        </p>
        <CodeExample
          title="Flutter Example"
          code={`import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  void _handleLogin() {
    // Handle login logic
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _usernameController,
              decoration: InputDecoration(
                labelText: 'Username',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 10),
            TextField(
              controller: _passwordController,
              decoration: InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
              ),
              obscureText: true,
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: _handleLogin,
              child: Text('Login'),
            ),
          ],
        ),
      ),
    );
  }
}`}
          description="Example of Flutter implementation"
        />
      </ContentSection>

      <ContentSection title="Mobile App Architecture">
        <h3 className="text-lg font-medium text-white mb-2">MVVM Pattern</h3>
        <p>
          Implement MVVM architecture in mobile apps.
        </p>
        <CodeExample
          title="MVVM Implementation"
          code={`// Model
class User {
  final String id;
  final String name;
  final String email;

  User({required this.id, required this.name, required this.email});
}

// ViewModel
class UserViewModel extends ChangeNotifier {
  User? _user;
  bool _isLoading = false;

  User? get user => _user;
  bool get isLoading => _isLoading;

  Future<void> fetchUser(String id) async {
    _isLoading = true;
    notifyListeners();

    try {
      _user = await userRepository.getUser(id);
    } catch (e) {
      print('Error fetching user: $e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }
}

// View
class UserProfileScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<UserViewModel>(
      builder: (context, viewModel, child) {
        if (viewModel.isLoading) {
          return CircularProgressIndicator();
        }

        final user = viewModel.user;
        if (user == null) {
          return Text('No user found');
        }

        return Column(
          children: [
            Text(user.name),
            Text(user.email),
          ],
        );
      },
    );
  }
}`}
          description="Example of MVVM pattern implementation"
        />
      </ContentSection>

      <ContentSection title="Mobile App Testing">
        <h3 className="text-lg font-medium text-white mb-2">Unit Testing</h3>
        <p>
          Write unit tests for mobile app components.
        </p>
        <CodeExample
          title="Unit Test Example"
          code={`import 'package:flutter_test/flutter_test.dart';
import 'package:my_app/login_screen.dart';

void main() {
  testWidgets('Login button should be disabled when fields are empty',
      (WidgetTester tester) async {
    await tester.pumpWidget(MyApp());

    // Verify initial state
    expect(find.byType(ElevatedButton), findsOneWidget);
    expect(tester.widget<ElevatedButton>(find.byType(ElevatedButton)).onPressed,
        isNull);

    // Enter text in username field
    await tester.enterText(find.byType(TextFormField).first, 'testuser');
    await tester.pump();

    // Verify button is still disabled
    expect(tester.widget<ElevatedButton>(find.byType(ElevatedButton)).onPressed,
        isNull);

    // Enter text in password field
    await tester.enterText(find.byType(TextFormField).last, 'password');
    await tester.pump();

    // Verify button is now enabled
    expect(tester.widget<ElevatedButton>(find.byType(ElevatedButton)).onPressed,
        isNotNull);
  });
}`}
          description="Example of mobile app unit testing"
        />
      </ContentSection>

      <ContentSection title="Mobile App Security">
        <p>
          Implement security measures in mobile apps:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Secure data storage</li>
          <li>Network security</li>
          <li>Authentication and authorization</li>
          <li>Input validation</li>
          <li>Code obfuscation</li>
          <li>Secure communication</li>
          <li>Biometric authentication</li>
          <li>App signing</li>
        </ul>
      </ContentSection>

      <ContentSection title="Mobile App Performance">
        <p>
          Optimize mobile app performance:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Minimize network requests</li>
          <li>Optimize images and assets</li>
          <li>Implement efficient caching</li>
          <li>Use lazy loading</li>
          <li>Optimize database queries</li>
          <li>Reduce memory usage</li>
          <li>Implement background processing</li>
          <li>Use performance monitoring tools</li>
        </ul>
      </ContentSection>

      <ContentSection title="Mobile App Best Practices">
        <ul className="list-disc list-inside space-y-2">
          <li>Follow platform guidelines</li>
          <li>Implement responsive design</li>
          <li>Handle offline functionality</li>
          <li>Implement proper error handling</li>
          <li>Use appropriate navigation patterns</li>
          <li>Implement proper state management</li>
          <li>Follow accessibility guidelines</li>
          <li>Implement proper logging</li>
          <li>Use analytics and crash reporting</li>
          <li>Regular testing and updates</li>
        </ul>
      </ContentSection>
    </ContentLayout>
  );
} 