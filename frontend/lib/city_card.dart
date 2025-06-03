import 'package:flutter/material.dart';

class CityCard extends StatelessWidget {
  final String cityName;
  final bool isInShortestPath;

  const CityCard(this.cityName, this.isInShortestPath, {super.key});

  @override
  Widget build(BuildContext context) {
    final cardColor = isInShortestPath ? Colors.green : Colors.red;

    return Card(
      color: cardColor,
      child: ListTile(
        title: Text(
          cityName,
          style: TextStyle(
              color: Colors.white, fontSize: 14, fontWeight: FontWeight.bold),
        ),
        // Add more information about the city if needed
      ),
    );
  }
}