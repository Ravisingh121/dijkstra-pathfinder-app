import 'package:flutter/material.dart';
import 'city_card.dart';

class CalculatePathButton extends StatefulWidget {
  final Future<void> Function(String, String) calculateFunction;

  const CalculatePathButton({super.key, required this.calculateFunction});

  @override
  _CalculatePathButtonState createState() => _CalculatePathButtonState();
}

class _CalculatePathButtonState extends State<CalculatePathButton> {
  final TextEditingController startController = TextEditingController();
  final TextEditingController endController = TextEditingController();

  @override
  void dispose() {
    startController.dispose();
    endController.dispose();
    super.dispose();
  }

  void _onCalculatePressed() {
    final start = startController.text.trim();
    final end = endController.text.trim();

    if (start.isNotEmpty && end.isNotEmpty) {
      widget.calculateFunction(start, end);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter both start and end cities')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(
          controller: startController,
          decoration: const InputDecoration(labelText: 'Start City'),
        ),
        const SizedBox(height: 12),
        TextField(
          controller: endController,
          decoration: const InputDecoration(labelText: 'End City'),
        ),
        const SizedBox(height: 16),
        ElevatedButton(
          onPressed: _onCalculatePressed,
          child: const Text('Calculate Shortest Path'),
        ),
      ],
    );
  }
}

// ✅ Add this widget to display on the home screen
class CityListScreen extends StatelessWidget {
  const CityListScreen({super.key});

  Future<void> _mockCalculatePath(String start, String end) async {
    // This is just a placeholder function
    print("Calculating shortest path from $start to $end");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('City List Screen')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: CalculatePathButton(calculateFunction: _mockCalculatePath),
      ),
    );
  }
}
